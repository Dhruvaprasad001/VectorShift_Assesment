// pipeline.js - simple model definitions (via JSDoc) for clarity

/**
 * @typedef {Object} PipelineNode
 * @property {string} id
 * @property {string} type
 * @property {Object} data
 * @property {{x:number,y:number}} position
 */

/**
 * @typedef {Object} PipelineEdge
 * @property {string} id
 * @property {{source:string, sourceHandle?:string, target:string, targetHandle?:string}} connection
 * @property {string} type
 */

/**
 * @typedef {Object} Pipeline
 * @property {PipelineNode[]} nodes
 * @property {PipelineEdge[]} edges
 */

export const createPipeline = (nodes = [], edges = []) => ({ nodes, edges });


