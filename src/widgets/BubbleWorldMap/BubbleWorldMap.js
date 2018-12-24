import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import * as d3 from 'd3';
import projection from 'projections/miller';
import insidePolygon from 'point-in-polygon';

import worldMapShapes from './worldMapShapes';

const statuses = [
  'danger',
  'warning',
  'info',
  'success',
  'neutral',
];

class BubbleWorldMap extends PureComponent {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.shape({
      lat: PropTypes.number,
      lon: PropTypes.number,
      count: PropTypes.number,
      status: PropTypes.string,
    })),
  }

  static defaultProps = {
    values: [],
  }

  constructor() {
    super();
    this.createBubbleWorldMap = this.createBubbleWorldMap.bind(this);
  }

  componentDidUpdate() {
    const { values } = this.props;
    const worldMapValues = this.convertValues(values, this.width, this.dotShift);

    this.svg.selectAll('.dashli-bubble-world-map-active-dot').remove();
    let g = this.svg.append('g').attr('transform', 'translate(0, 0)');
    g.selectAll('circle')
      .data(worldMapValues)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', this.dotDiameter / 2)
      .attr('class', d => `dashli-bubble-world-map-active-dot dashli-bubble-world-map-active-dot-${d.status}`);

    this.svg.selectAll('.dashli-bubble-world-map-active-circle').remove();
    g = this.svg.append('g').attr('transform', 'translate(0, 0)');
    g.selectAll('circle')
      .data(worldMapValues)
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => Math.max(this.dotDiameter, d.percent * (this.width / 8)))
      .attr('class', d => `dashli-bubble-world-map-active-circle dashli-bubble-world-map-active-circle-${d.status}`);
  }

  componentWillUnmount() {
    if (this.container) {
      this.container.remove();
    }
  }

  convertShapes() {
    const mapData = [];
    const pixelShapes = worldMapShapes.map(shape => shape.map((coordinate) => {
      const { x, y } = projection(coordinate);
      return [x * this.width, y * this.width];
    }));

    for (let x = 0; x < this.width; x += this.dotShift) {
      for (let y = 0; y < this.width * 0.5; y += this.dotShift) {
        const point = { x: x + (this.dotShift / 2), y: y + (this.dotShift / 2) };
        if (pixelShapes.find(shape => insidePolygon([x, y], shape))) {
          mapData.push(point);
        }
      }
    }

    return mapData;
  }

  convertValues(values) {
    let totalCount = 0;
    return values.map((item) => {
      const { x, y } = projection(item);
      let cx = x * this.width;
      let cy = y * this.width;
      cx = (cx - (cx % this.dotShift)) + (this.dotShift / 2);
      cy = (cy - (cy % this.dotShift)) + (this.dotShift / 2);
      totalCount += item.count;
      return {
        x: cx,
        y: cy,
        count: item.count,
        status: item.status,
      };
    }).reduce((result, item) => {
      const existing = result.find(i => i.x === item.x && i.y === item.y);
      if (existing) {
        const itemStatus = item.status || 'neutral';
        const status = statuses.indexOf(existing.status) > statuses.indexOf(itemStatus) ? itemStatus : existing.status;
        existing.count += item.count;
        existing.status = status;
      } else {
        const status = item.status || 'neutral';
        result.push({ ...item, status });
      }
      return result;
    }, []).map(item => ({ ...item, percent: item.count / totalCount })).sort((a, b) => b.count - a.count);
  }

  createBubbleWorldMap(element) {
    const { values } = this.props;
    if (values && element) {
      const ratio = Math.min(element.offsetWidth / 1.9, element.offsetHeight);
      this.dotDiameter = Math.max(Math.floor(Math.sqrt(element.offsetWidth) / 5), 2);
      this.dotDiameter = Math.max(Math.floor(ratio / 100), 3);
      const dotSpace = Math.max(Math.floor(this.dotDiameter / 2.5), 1);
      this.dotShift = this.dotDiameter + dotSpace;

      this.width = Math.ceil(1.9 * ratio / this.dotShift) * this.dotShift;
      const height = Math.ceil(ratio / this.dotShift) * this.dotShift;

      const worldMapPoints = this.convertShapes(this.width, this.dotShift);
      const worldMapValues = this.convertValues(values, this.width, this.dotShift);

      this.container = d3.select(element);
      this.svg = this.container.append('svg');

      this.svg.attr('width', this.width);
      this.svg.attr('height', height);

      let g = this.svg.append('g').attr('transform', 'translate(0, 0)');

      g.selectAll('circle')
        .data(worldMapPoints)
        .enter()
        .append('circle')
        .attr('cx', /* istanbul ignore next */d => d.x)
        .attr('cy', /* istanbul ignore next */d => d.y)
        .attr('r', this.dotDiameter / 2)
        .attr('class', 'dashli-bubble-world-map-dot');

      g = this.svg.append('g').attr('transform', 'translate(0, 0)');
      g.selectAll('circle')
        .data(worldMapValues)
        .enter()
        .append('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', this.dotDiameter / 2)
        .attr('class', d => `dashli-bubble-world-map-active-dot dashli-bubble-world-map-active-dot-${d.status}`);

      g = this.svg.append('g').attr('transform', 'translate(0, 0)');
      g.selectAll('circle')
        .data(worldMapValues)
        .enter()
        .append('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => Math.max(this.dotDiameter, d.percent * (this.width / 8)))
        .attr('class', d => `dashli-bubble-world-map-active-circle dashli-bubble-world-map-active-circle-${d.status}`);
    }
  }

  render() {
    return (
      <div className="dashli-bubble-world-map">
        <div className="dashli-bubble-world-map-visual" ref={this.createBubbleWorldMap} />
      </div>
    );
  }
}

export default BubbleWorldMap;
