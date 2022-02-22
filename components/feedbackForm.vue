<template>
  <div class="feedback-form">
    <form
      netlify
      action="/"
      method="post"
      name="feedback"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="feedback" />
      <label for="name">Name</label>
      <input type="text" name="name" />
      <label for="name">Email</label>
      <input type="email" name="email" required />
      <label for="feedback">What is your feedback?</label>
      <textarea wrap="soft" name="feedback" required></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<style scoped>
.feedback-form {
  margin: 40px 40px;
  min-width: 300px;
  width: 45%;
}
input,
textarea,
button {
  font-size: inherit;
  margin: 15px 0;
  padding: 12px 20px;
  width: 100%;
}

button {
  background-color: teal;
  border: 1px solid black;
  color: white;
  width: 50%;
}
</style>
