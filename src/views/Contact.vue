<template>
  <div class="container">
    <h1>Contato</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sed voluptatibus doloribus</p>
    <form>
      <div class="row">
        <div class="col-6">
          <div>
            <label for>Nome*</label>
            <input type="text" placeholder />
          </div>
          <div>
            <label for>E-Mail*</label>
            <input type="text" />
          </div>

          <div>
            <label for>Cidade</label>
            <input type="text" />
          </div>

          <div>
            <label for>Telefone*</label>
            <input type="text" />
          </div>
        </div>
        <div class="col-6">
          <div>
            <label for>Assunto*</label>
            <input type="text" />
          </div>

          <div>
            <label for>Mensagem*</label>

            <textarea name id cols="30" rows="11" placeholder="Digite aqui sua mensagem..."></textarea>
          </div>
          <div class="align-right">
            <btn type="submit" class="brown">Enviar</btn>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import btn from '../components/Button'

export default {
  components: {
    btn,
  },
}
</script>

<style scoped lang="scss">
p {
  margin-top: 1rem;
}

form {
  margin: 3rem 0;
  label {
    font-size: 13px;
    font-weight: 700;
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

    button {
      padding: 0.8rem 3rem;
      color: #fff;
      font-family: 'Montserrat', sans-serif;
      background-color: #403225;
      border: none;
    }
  }
}
</style>
