//npx storybook@latest init --type vue3
//http://localhost:6006/
//npm run storybook

// Summary workflow for first time:
// npm run build - This will generate your library files (es and cjs) and sourcemaps if enabled, ready for publishing.
// Make sure your package.json version is updated to the version you want to release, e.g., "version": "1.0.0"
// git add .
// git commit -m "Release version x.y.z"
// git tag vx.y.z
// git push origin main --tags
//This creates a Git tag named v1.0.0. Pushes the tag along with your commit to GitHub
// npm publish --access public
// --access public is necessary if your package name is scoped (e.g. @username/package) to allow public publishing.
// If it’s an unscoped package like yours (vue-tailwind-design-system), --access public is optional but fine to keep explicitly.

// workflow to follow whenever making changes and want to update both GitHub Pages (for docs/storybook/demo) and npm package:
// 1. Update your version (semantic versioning):
// npm version patch
// # or
// npm version minor
// # or
// npm version major

// # 1. Build the component library
// npm run build
// npm run postbuild

// # 2. Build the Storybook static site
// npm run build-storybook

// # 3. Stage all changes (dist files, Storybook, version bumps, etc.)
// git add .

// # 4. Commit with a meaningful message (e.g., version bump or feature/fix description)
// git commit -m "chore: bump version to 1.0.1"

// # 5. Tag the commit with the new version
// git tag v1.0.1

// # 6. Push code + tag to GitHub
// git push origin main
// git push origin v1.0.1    # Push the new tag

// # 7. Deploy Storybook to GitHub Pages
// npm run deploy-storybook

// # 8. Publish the package to npm (must be AFTER the version is bumped and built)
// npm publish --access public
