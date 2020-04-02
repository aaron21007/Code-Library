const bayes = require('classificator')
const classifier = bayes()

classifier.learn('LE BRINDA DESCUENTO ADICIONAL A LO YA OTORGADO COMUNÍQUESE AL', 'cobranza')
classifier.learn('es importante que realice los pagos', 'cobranza')
classifier.learn('Es importante pase a abonar el día de hoy para no afectar su crédito', 'cobranza')
classifier.learn('No detengas tu futuro laboral estudiando una Lic. Ejecutiva en UNITEC', 'publicidad')
classifier.learn('Usa este codigo para recuperar tu usuario Principal Digital.', 'alertas')
classifier.learn('Disfruta en KFC 8 pzs con pure, ensalada fam y 3 bisquets por $199 ', 'publicidad')
classifier.learn('Gracias por aceptar La Tarjeta American Express, la visita sera el dia de hoy entre las 11 y 12 hrs', 'publicidad')
classifier.learn('Hola esto es una prueba', 'otro')
classifier.learn('Low Server Space', 'alertas')
classifier.learn('Consorcio representante de Citibanamex', 'cobranza')
classifier.learn('estudia tu Licenciatura en Linea UNITEC', 'publicidad')
classifier.learn('Maestria OnLine la UNITEC', 'publicidad')
classifier.learn('ENVIO GRATIS', 'publicidad')
classifier.learn('falta de pago', 'cobranza')
classifier.learn('de su deuda', 'cobranza')
classifier.learn('pagos vencidos', 'cobranza')
classifier.learn('prueba', 'otro')
classifier.learn('mensaje de prueba', 'otro')
classifier.learn('cambio de nip', 'alertas')
classifier.learn('alternativas para pagar', 'cobranza')

console.log(classifier.categorize("Cliente HSBC, hizo un acuerdo con Consorcio Juridico para pagar su credito 1685 el dia de hoy por $60000, llame al 5559995050 o 8002699909 para reportar el pago"));
