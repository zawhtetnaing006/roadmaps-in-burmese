const gulp = require('gulp');
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, 'topics');
const outputDir = __dirname;

function getCreationDate(dirPath) {
    const stats = fs.statSync(dirPath);
    return stats.birthtime.toISOString();
}

function buildFolderTree(dir) {
    const tree = {};
    const list = fs.readdirSync(dir, { withFileTypes: true });

    list.forEach(file => {
        if (file.isDirectory()) {
            const subDirPath = path.join(dir, file.name);
            tree[file.name] = {
                createdDate: getCreationDate(subDirPath),
                ...buildFolderTree(subDirPath)
            };
        }
    });

    return tree;
}

gulp.task('generateFoldersJson', (done) => {
    const folderTree = buildFolderTree(rootDir);
    const jsonContent = JSON.stringify({ topics: folderTree }, null, 2);
    fs.writeFileSync(path.join(outputDir, 'folders.json'), jsonContent);
    done();
});

gulp.task('default', gulp.series('generateFoldersJson'));
