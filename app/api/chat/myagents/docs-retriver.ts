// import * as fs from "fs";





/**
 * Recursively traverse a directory and fetch all markdown files.
 *
 * @param dir - The directory to traverse.
 * @returns An array of markdown file paths.
 */
function fetchMarkdownFiles(fs: any, path: any, dir: string): string[] {

    const files = fs.readdirSync(dir, { withFileTypes: true });
    let markdownFiles: string[] = [];

    for (const file of files) {
        if (file.isDirectory()) {
            markdownFiles = markdownFiles.concat(fetchMarkdownFiles(fs, path, path.join(dir, file.name)));
        } else if (path.extname(file.name) === '.md') {
            markdownFiles.push(path.join(dir, file.name));
        }
    }

    return markdownFiles;
}

/**
 * Traverse the directory tree and create a single markdown file from all .md files.
 *
 * @param rootDir - The root directory to start traversal.
 * @param outputFile - The output file path.
 */
export function consolidateMarkdownFiles(fs: any, path: any): string {


    const appRoot = '/home/comp/projects/langchain-nextjs';
    const docsRoot = appRoot +  '/docosaurus/docs';
    const outputFile = appRoot + '/generated-docs.md';

    const allMdFiles = fetchMarkdownFiles(fs, path, docsRoot);

    let consolidatedContent = '';

    for (const mdFile of allMdFiles) {
        const content = fs.readFileSync(mdFile, 'utf8');
        consolidatedContent += `# File: ${mdFile}\n\n${content}\n\n`;
    }

    fs.writeFileSync(outputFile, consolidatedContent);
    return consolidatedContent;
}


// export const defaultAgentPrefix = fs.readFileSync(appRoot + '/docusaurus/docs/Agents/default.md', 'utf8');
// export const defaultAgentPrefix = consolidateMarkdownFiles();
