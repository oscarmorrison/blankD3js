var data = [
    [ 5,     20 ],
    [ 480,   90 ],
    [ 250,   50 ],
    [ 100,   33 ],
    [ 330,   95 ],
    [ 410,   12 ],
    [ 475,   44 ],
    [ 25,    67 ],
    [ 85,    21 ],
    [ 220,   88 ],
    [600, 150]
];

const width = 500;
const height = 150;
const padding = 20;

const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

const xDomain = d3.extent(data, d => d[0]);

const xScale = d3.scaleLinear()
    .domain(xDomain)
    .range([0 + padding, width - padding]);

const yDomain= d3.extent(data, d => d[1]);

const yScale = d3.scaleLinear()
    .domain(yDomain)
    .range([height - padding, 0 + padding]);

const rScale = d3.scaleLinear()
    .domain(yDomain)
    .range([2,5]);

const xAxis = d3.axisBottom()
    .scale(xScale)
    .ticks(5);

const yAxis = d3.axisLeft()
    .scale(yScale)
    .ticks(2);

svg.append('g')
    .attr('class', 'axis')
    .attr("transform", `translate(0, ${(height - padding)})`)
    .call(xAxis);

svg.append('g')
    .attr('class', 'axis')
    .attr("transform", `translate(${padding}, 0)`)
    .call(yAxis);

svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', d => xScale(d[0]))
    .attr('cy', d => yScale(d[1]))
    .attr('r', d => rScale(d[1]));

svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text(d => `${d[0]}, ${d[1]}`)
    .attr('x', d => xScale(d[0]))
    .attr('y', d => yScale(d[1]));
