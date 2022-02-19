<template>
  <div>
    <form
      netlify
      action="/"
      method="POST"
      name="feedback"
    >
      <input type="hidden" name="form-name" value="feedback" />
      <input type="text" name="name" />
      <input type="email" placeholder="email" required>
      <input type="string" placeholder="feedback" required>
    </form>
  </div>
</template>