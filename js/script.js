$.Tween.propHooks.number = {
  get: function(tween) {
    var num = tween.elem.innerHTML.replace(/^[^\d-]+/, "");
    return parseFloat(num) || 0;
  },

  set: function(tween) {
    var opts = tween.options;
    tween.elem.innerHTML =
      (opts.prefix || "") +
      tween.now.toFixed(opts.fixed || 0) +
      (opts.postfix || "");
  }
};

$("#num-1").animate(
  { number: 8 },
  {
    duration: 4000,
    postfix: "+"
  }
);

$("#num-2")
  .delay(500)
  .animate(
    { number: 10 },
    {
      duration: 1000,
      postfix: "+"
    }
  );

$("#num-3")
  .delay(1000)
  .animate(
    { number: 350 },
    {
      duration: 3500,
      postfix: "K+"
    }
  );

$("#num-4")
  .delay(1000)
  .animate(
    { number: 176 },
    {
      duration: 3000,
      postfix: "+"
    }
  );