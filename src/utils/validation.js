const validation = form => {
  Object.keys(form).forEach(item => {
    const field = form[item]

    field.errors = []

    if (field.required && !field.value) {
      field.errors.push(`O campo ${field.name} é obrigatório.`)
    }

    if (field.type === 'email' && !field.value.includes('@')) {
      field.errors.push(`E-Mail inválido.`)
    }
  })

  return form
}

export default validation
