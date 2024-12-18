import { z } from 'zod'

const maxSellingDate = new Date(); // Hoje
const minSellingDate = new Date(1960, 0, 1); // Define a data mínima para 1 de janeiro de 1960
const maxYearManufacture = new Date()
maxYearManufacture.setFullYear(maxYearManufacture.getFullYear())

const Car = z.object({
  brand: z
    .string()
    .max(25, { message: 'O marca deve ter, no máximo, 25 caracteres' }),

  model: z
    .string()
    .max(25, { message: 'O modelo deve ter, no máximo, 25 caracteres' }),

  color: z
    .string()
    .max(12, { message: 'A cor deve pode ter, no máximo, 12 caracteres' }),

  year_manufacture: z.coerce
    .number()
    .min(minSellingDate.getFullYear(), {
      message: 'O ano de fabricação deve ser maior que 1960',
    })
    .max(new Date().getFullYear(), {
      message: 'O ano de fabricação deve ser menor que ' + maxYearManufacture.getFullYear(),
    }),

  imported: z.boolean(),

  plates: z
    .string()
    .max(8, { message: 'A Placa pode ter, no máximo, 8 caracteres' }),

  selling_date: z
    .union([ //z.union para conseguir colocar outros tipos dados, sempre especificados
      z.coerce
        .date()
        .min(minSellingDate, { message: 'Data de venda está muito no passado' })
        .max(maxSellingDate, {
          message: 'Data de venda não deve ser maior que data atual',
        }),
      z.null(), //nullable não estava funcionando para campos opcionais, substitui para  z.null
      z.undefined() //para poder não colocar o valor opcional
    ]),

  selling_price: z
    .union([ //z.union para conseguir colocar outros tipos dados, sempre especificados
      z.coerce
        .number()
        .gte(1000, { message: 'O valor deve ser maior que R$ 1.000' })
        .lte(5000000, { message: 'O valor deve ser menor que R$ 5.000.000' }),
      z.null(), //nullable não estava funcionando para campos opcionais, substitui para  z.null
      z.undefined() //para poder não colocar o valor opcional
    ])
})

export default Car