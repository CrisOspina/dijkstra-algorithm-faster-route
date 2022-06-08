import Graph from 'node-dijkstra'
import {nodes} from './graph.js'

export function getFasterRoute({origin, destiny}) {
  const graph = new Graph()

  for (const [node, neighbor] of Object.entries(nodes)) {
    graph.addNode(node, neighbor)
  }

  const route = graph.path(origin, destiny).join(',')

  return route
}

const origin = 'C'
const destiny = 'O'
const route = getFasterRoute({origin, destiny})

console.log(`Route more faster between C and O: ${route}`)
