import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "Mínimo 3 caracteres"),
  price: z.string().transform((val) => parseFloat(val)).refine((val) => val > 0, "Preço deve ser maior que 0"),
  description: z.string().min(5, "Descrição muito curta"),
});

export type ProductFormData = z.infer<typeof productSchema>;