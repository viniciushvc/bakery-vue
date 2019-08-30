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
            <div>
              <label for>Nome*</label>
              <input type="text" placeholder="Nome" />
            </div>
            <div>
              <label for>E-Mail*</label>
              <input type="text" placeholder="E-Mail" />
            </div>

            <div>
              <label for>Cidade</label>
              <input type="text" placeholder="Cidade" />
            </div>

            <div>
              <label for>Telefone*</label>
              <input type="text" placeholder="(99) 9999-9999" />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div>
              <label for>Assunto*</label>
              <input type="text" placeholder="Assunto" />
            </div>

            <div>
              <label for>Mensagem*</label>

              <textarea
                name=""
                id=""
                cols="30"
                rows="11"
                placeholder="Digite aqui sua mensagem..."
              ></textarea>
            </div>
            <div class="align-right">
              <btn type="submit" class="brown">Enviar</btn>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import btn from '../components/Button'

export default {
  components: {
    btn,
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault()

      console.log('teste')
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
    margin-top: 1rem;
  }
}

form {
  margin: 3rem 0;
  label {
    font-size: 13px;
    font-weight: 600;
    display: block;
    margin-bottom: 0.5rem;
  }
  input,
  textarea {
    font-size: 13px;
    font-family: 'Montserrat', sans-serif;
    display: block;
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #d7d7d7;
    margin-bottom: 1rem;
  }

  .align-right {
    text-align: right;
  }
}
</style>
