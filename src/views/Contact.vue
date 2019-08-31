<template>
  <div class="container">
    <div id="contacts">
      <h1 class="contact-title">Contato</h1>
      <p class="contact-description">
        Ut vitae volutpat risus. Nam vitae congue odio, mattis dignissim neque.
        Nam eros sapien, semper in pellentesque ut, suscipit eu nunc. Donec
        malesuada egestas ligula, non malesuada sapien suscipit ut.
      </p>

      <form @submit="checkForm">
        <div class="row">
          <div class="col-12 col-md-6">
            <Input
              v-model="form.name.value"
              id="name"
              title="Nome*"
              placeholder="Nome"
              :errors="form.name.errors"
            />

            <Input
              v-model="form.email.value"
              id="email"
              title="E-Mail*"
              placeholder="E-Mail"
              :errors="form.email.errors"
            />

            <Input
              v-model="form.city.value"
              id="city"
              title="Cidade"
              placeholder="Cidade"
              :errors="form.city.errors"
            />

            <Input
              v-model="form.phone.value"
              id="phone"
              title="Telefone*"
              placeholder="(99) 9999-9999"
              :errors="form.phone.errors"
            />
          </div>
          <div class="col-12 col-md-6">
            <Input
              v-model="form.subject.value"
              id="subject"
              title="Assunto*"
              placeholder="Assunto"
              :errors="form.subject.errors"
            />

            <Textarea
              v-model="form.message.value"
              cols="30"
              rows="11"
              id="message"
              title="Mensagem*"
              placeholder="Digite aqui sua mensagem..."
              :errors="form.message.errors"
            />

            <div class="align-right">
              <Btn type="submit" class="brown">Enviar</Btn>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Btn from '../components/Button'
import Input from '../components/Input'
import Textarea from '../components/Textarea'

export default {
  components: {
    Btn,
    Input,
    Textarea,
  },
  data() {
    return {
      form: {
        name: {
          name: 'Nome',
          value: '',
          required: true,
          errors: [],
          type: 'string',
        },
        email: {
          name: 'E-Mail',
          value: '',
          required: true,
          errors: [],
          type: 'email',
        },
        city: {
          name: 'Cidade',
          value: '',
          required: false,
          errors: [],
          type: 'string',
        },
        phone: {
          name: 'Telefone',
          value: '',
          required: true,
          errors: [],
          type: 'phone',
        },
        subject: {
          name: 'Assunto',
          value: '',
          required: true,
          errors: [],
          type: 'string',
        },
        message: {
          name: 'Mensagem',
          value: '',
          required: true,
          errors: [],
          type: 'string',
        },
      },
    }
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault()

      Object.keys(this.form).forEach(item => {
        const field = this.form[item]

        field.errors = []

        if (field.required && !field.value) {
          field.errors.push(`O campo ${field.name} é obrigatório.`)
        }

        if (field.type === 'email' && !field.value.includes('@')) {
          field.errors.push(`E-Mail inválido.`)
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
#contacts {
  .contact-title {
    font-size: 18px;
    text-transform: uppercase;
  }
  .contact-description {
    font-size: 14px;
    margin-top: 1rem;
  }

  form {
    margin: 3rem 0;

    .align-right {
      text-align: right;
    }
  }
}
</style>
