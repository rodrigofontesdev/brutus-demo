import { getAuthenticatedUserOptions } from '@hooks/useAuth'
import { queryClient } from '@services/react-query'
import { format } from '@utils/formatter'
import { z } from 'zod'

export const deleteAccountSchema = z.object({
  businessCnpj: z
    .string()
    .min(1, { message: 'O campo CNPJ é obrigatório.' })
    .regex(/^[0-9a-z]{2}\.[0-9a-z]{3}\.[0-9a-z]{3}\/[0-9a-z]{4}-[0-9]{2}$/i, {
      message: 'O formato do CNPJ é inválido.',
    })
    .refine(
      (value) => {
        const authenticatedUser = queryClient.getQueryData(getAuthenticatedUserOptions.queryKey)
        const cnpj = authenticatedUser?.data.cnpj

        if (!cnpj) return false

        return format.digits(value) === cnpj
      },
      {
        message: 'O CNPJ não corresponde ao CNPJ do empreendedor.',
      },
    ),
})
