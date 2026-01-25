import { Document, Page, StyleSheet, Text, View, Font } from '@react-pdf/renderer'
import { format } from '@utils/formatter'

Font.registerHyphenationCallback((word) => [word])

const styles = StyleSheet.create({
  page: {
    paddingVertical: 70,
    paddingHorizontal: 50,
    fontFamily: 'Times-Roman',
    fontSize: 11,
    color: '#000',
  },
  container: {
    borderWidth: 2,
    borderColor: '#000',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    backgroundColor: '#E6E6E6',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  subtitle: {
    fontSize: 9,
    fontWeight: 'bold',
    paddingVertical: 6,
    paddingHorizontal: 2,
    backgroundColor: '#E6E6E6',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  fullRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  rowLabel: {
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 2,
  },
  rowValue: {
    width: 155,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderLeftWidth: 2,
    borderLeftColor: '#000',
  },
  currencySymbol: {
    width: 20,
  },
  amount: {
    flex: 1,
    textAlign: 'right',
  },
  location: {
    flexDirection: 'column',
    flex: 1,
    rowGap: 6,
    paddingVertical: 6,
    paddingHorizontal: 2,
    fontSize: 9,
  },
  signature: {
    width: 155,
    height: 55,
    flexDirection: 'column',
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderLeftWidth: 2,
    borderLeftColor: '#000',
    fontSize: 9,
  },
  note: {
    flexDirection: 'column',
    rowGap: 2,
    height: 55,
    paddingVertical: 6,
    paddingHorizontal: 2,
    fontSize: 9,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  bold: {
    fontWeight: 'bold',
  },
})

type ReportPdfTemplateProps = {
  cnpj: string
  name: string
  period: string
  city: string
  state: string
  tradeWithInvoice: number
  tradeWithoutInvoice: number
  industryWithInvoice: number
  industryWithoutInvoice: number
  servicesWithInvoice: number
  servicesWithoutInvoice: number
}

const RevenueRow = ({
  label,
  amount,
  isBold = false,
}: {
  label: string
  amount: number
  isBold?: boolean
}) => (
  <View style={isBold ? [styles.row, styles.bold] : styles.row}>
    <Text style={styles.rowLabel}>{label}</Text>
    <View style={styles.rowValue}>
      <Text style={styles.currencySymbol}>R$</Text>
      <Text style={styles.amount}>{format.price(amount, true)}</Text>
    </View>
  </View>
)

export function ReportPdfTemplate({
  cnpj,
  name,
  period,
  city,
  state,
  tradeWithInvoice,
  tradeWithoutInvoice,
  industryWithInvoice,
  industryWithoutInvoice,
  servicesWithInvoice,
  servicesWithoutInvoice,
}: ReportPdfTemplateProps) {
  const tradeTotal = tradeWithInvoice + tradeWithoutInvoice
  const industryTotal = industryWithInvoice + industryWithoutInvoice
  const servicesTotal = servicesWithInvoice + servicesWithoutInvoice
  const total = tradeTotal + industryTotal + servicesTotal
  const location = [city, state].filter(Boolean).join(' - ')

  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}
      >
        <View style={styles.container}>
          <Text style={styles.title}>RELATÓRIO MENSAL DAS RECEITAS BRUTAS</Text>

          <View style={styles.fullRow}>
            <Text>CNPJ:</Text>
            <Text style={styles.uppercase}>{cnpj ? format.cnpj(cnpj) : ''}</Text>
          </View>
          <View style={styles.fullRow}>
            <Text>Empreendedor individual:</Text>
            <Text style={styles.uppercase}>{name ?? ''}</Text>
          </View>
          <View style={styles.fullRow}>
            <Text>Período de apuração:</Text>
            <Text style={styles.uppercase}>{period ? format.period(period) : ''}</Text>
          </View>

          <Text style={styles.subtitle}>
            RECEITA BRUTA MENSAL – REVENDA DE MERCADORIAS (COMÉRCIO)
          </Text>

          <RevenueRow
            label="I – Revenda de mercadorias com dispensa de emissão de documento fiscal"
            amount={tradeWithoutInvoice}
          />
          <RevenueRow
            label="II – Revenda de mercadorias com documento fiscal emitido"
            amount={tradeWithInvoice}
          />
          <RevenueRow
            label="III – Total das receitas com revenda de mercadorias (I + II)"
            amount={tradeTotal}
          />

          <Text style={styles.subtitle}>
            RECEITA BRUTA MENSAL – VENDA DE PRODUTOS INDUSTRIALIZADOS (INDÚSTRIA)
          </Text>

          <RevenueRow
            label="IV – Venda de produtos industrializados com dispensa de emissão de documento fiscal"
            amount={industryWithoutInvoice}
          />
          <RevenueRow
            label="V – Venda de produtos industrializados com documento fiscal emitido"
            amount={industryWithInvoice}
          />
          <RevenueRow
            label="VI – Total das receitas com venda de produtos industrializados (IV + V)"
            amount={industryTotal}
          />

          <Text style={styles.subtitle}>RECEITA BRUTA MENSAL – PRESTAÇÃO DE SERVIÇOS</Text>

          <RevenueRow
            label="VII – Receita com prestação de serviços com dispensa de emissão de documento fiscal"
            amount={servicesWithoutInvoice}
          />
          <RevenueRow
            label="VIII – Receita com prestação de serviços com documento fiscal emitido"
            amount={servicesWithInvoice}
          />
          <RevenueRow
            label="IX – Total das receitas com prestação de serviços (VII + VIII)"
            amount={servicesTotal}
          />
          <RevenueRow
            label="X – Total geral das receitas brutas no mês (III + VI + IX)"
            amount={total}
            isBold
          />

          <View style={styles.row}>
            <View style={styles.location}>
              <Text>LOCAL E DATA:</Text>
              <Text style={[styles.uppercase, { fontSize: 11 }]}>
                {location ? `${location}, ` : ''}
                {period ? format.date(period) : ''}
              </Text>
            </View>
            <View style={styles.signature}>
              <Text>ASSINATURA DO EMPRESÁRIO:</Text>
            </View>
          </View>

          <View style={styles.note}>
            <Text>ENCONTRAM-SE ANEXADOS A ESTE RELATÓRIO:</Text>
            <Text>
              - Os documentos fiscais comprobatórios das entradas de mercadorias e serviços tomados
              referentes ao período;
            </Text>
            <Text>
              - As notas fiscais relativas às operações ou prestações realizadas eventualmente
              emitidas.
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}
