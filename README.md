构建命令填写 **pnpm install --frozen-lockfile && pnpm run pages:build**，预设框架为无，构建输出目录为 `.vercel/output/static`

保持默认设置完成首次部署。进入设置，将兼容性标志设置为 `nodejs_compat`

首次部署完成后进入设置，新增 PASSWORD 密钥（变量和机密下），而后重试部署。


