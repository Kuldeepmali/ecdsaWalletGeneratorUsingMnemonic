const ecdsaWalletGenerator = require('./helpers/ecdsaWalletGenerator')

ecdsaWalletGenerator(
  'embody wash stable bicycle cause style silly tree inspire brave equip wreck',
  (err, wallet) => {
    if (err) console.log(err)
    else console.log(wallet)
  }
)
