const validation = form => {
  Object.keys(form).forEach(item => {
    const field = form[item]

    field.errors = []

    if (field.required && !field.value) {
      field.errors.push(`O campo ${field.name} é obrigatório.`)
    }

    if (field.type === 'email' && !field.value.includes('@')) {
      field.errors.push(`${field.name} inválido.`)
    }

    if (field.type === 'phone' && field.value.length !== 14) {
      console.log(field.length)

      field.errors.push(`${field.name} inválido.`)
    }
  })

  return form
}

export default validation
