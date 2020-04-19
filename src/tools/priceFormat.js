export default function priceFormat(value) {
    const formatCoin = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'USD'
    }).format(value)

    return formatCoin
}

  