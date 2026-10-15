import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";

// public/ acompanha o runner standalone. NÃ£o aceita caminho nem URL do usuÃ¡rio.
export async function arteDoProduto(): Promise<string> {
  const bytes = await readFile(path.join(process.cwd(), "public/branding/imobi-manual.png"));
  return `data:image/png;base64,${bytes.toString("base64")}`;
}
