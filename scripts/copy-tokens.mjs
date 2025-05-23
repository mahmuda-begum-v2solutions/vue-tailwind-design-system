import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// __dirname workaround in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const srcDir = path.resolve(__dirname, '../src/assets/tokens')
const destDir = path.resolve(__dirname, '../dist/assets/tokens')

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true })
}

for (const file of fs.readdirSync(srcDir)) {
  if (file.endsWith('.css')) {
    fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file))
    console.log(`✅ Copied ${file}`)
  }
}
