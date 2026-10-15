/** Assinatura do manual oficial IMOBI CRM, enquadrada sem modificar a arte. */
export const SIMBOLO = {
  viewBox: "76 374 90 90",
  arquivo: "/branding/imobi-manual.png",
  // Oculta somente o início da letra seguinte, fora do símbolo i do manual.
  mascara: { x: 139, y: 410, width: 27, height: 54 },
} as const;

export const LOGOTIPO = {
  viewBox: "76 374 352 90",
  arquivo: SIMBOLO.arquivo,
} as const;
