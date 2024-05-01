import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { BlogPost, ProjectPost } from "#site/content";

/**
 * Combines multiple class names into a single string using tailwind-merge and clsx.
 * @param inputs - The class names to combine.
 * @returns The combined class names as a string.
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

/**
 * Formats a date string or number into a localized date string.
 * @param input - The date string or number to format.
 * @returns The formatted date string.
 */
export function formatDate(input: string | number): string {
    const date = new Date(input);

    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

/**
 * Sorts an array of blog posts by date in descending order.
 * @param posts - The array of blog posts to sort.
 * @returns The sorted array of blog posts.
 */
export function sortBlogPosts(posts: Array<BlogPost>): Array<BlogPost> {
    return posts.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;

        return 0;
    });
}

/**
 * Sorts an array of project posts by date in descending order.
 * @param posts - The array of project posts to sort.
 * @returns The sorted array of project posts.
 */
export function sortProjectPosts(
    posts: Array<ProjectPost>
): Array<ProjectPost> {
    return posts.sort((a, b) => {
        if (a.date > b.date) return -1;
        if (a.date < b.date) return 1;

        return 0;
    });
}
