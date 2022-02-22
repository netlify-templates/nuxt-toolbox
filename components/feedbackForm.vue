<template>
  <div class="feedback-form">
    <form
      netlify
      action="/testpage"
      method="post"
      data-netlify-honeypot="bot-field"
    >
      <p class="hidden">
        <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
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

.hidden {
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; 
  width: 1px;
}
</style>
