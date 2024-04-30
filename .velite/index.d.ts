// This file is generated by Velite

import config from '../velite.config'

type Collections = typeof config.collections

export type BlogPost = Collections['blogPosts']['schema']['_output']
export declare const blogPosts: BlogPost[]

export type ProjectPost = Collections['projectPosts']['schema']['_output']
export declare const projectPosts: ProjectPost[]
