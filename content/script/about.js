lst_ids = lst_ids.concat(
[
  {
    id: "Profile",
    func: GetProfile,
  },
]);

function GetProfile()
{
  if (sessionStorage.getItem("lang") == pt_lang)
  {
    return `
      <p class="section">
      Ao longo da minha vida eu fui colecionando alguns hobbies, mas \&eacute; curioso pensar como alguns deles j\&aacute; existiam em mim desde crian\&ccedil;a...
      </p>
      <p class="section">
      Eu tive a sorte de ter aula de inicia\&ccedil;\&atilde;o musical no col\&eacute;gio, com 8 anos de idade. Era divertido demais! N\&atilde;o parecia aula para mim. Era divers\&atilde;o! E quando a aula de m\&uacute;sica deixou de ser obrigat\&oacute;ria, comecei a fazer aula particular de teclado e me inscrevi para fazer parte da banda do col\&eacute;gio. Foi assim que aprendi a tocar saxofone, aos 11 anos. Com 15, comecei a tocar na igreja e pouco tempo depois eu j\&aacute; estava tocando em casamentos.
      </p><p>
      Hoje o meu contato com a m\&uacute;sica \&eacute; menor, mas indiscutivelmente, ela foi a minha primeira paix\&atilde;o e eu sigo sendo um m\&uacute;sico apaixonado.
      </p>
      <p class="section">
      Outra coisa que me fascinava desde pequeno, eram fotos da natureza e de animais selvagens. Eu perdia horas no computador buscando imagens para usar como papel de parede. Eram fotos do p\&ocirc;r do sol, da lua, do oceano, de animais selvagens e por ai vai. N\&atilde;o tinha fim! E at\&eacute; hoje eu tenho guardado essas fotos. 
      </p><p>
      DAQUI<br><br>
      Ainda adolescente e com uma cybershot na m\&atilde;o, a minha \&uacute;nica chance de tirar uma boa foto era fotografando o nascer do sol. E se tem uma coisa que eu tentei fazer nessa vida, foi fotografar o nascer do sol. Mas eu n\&atilde;o entendia nada de fotografia. Achava que bastava "visalizar a foto", mirar e apertar o bot\&atilde;o. Doce ilus\&atilde;o... N\&atilde;o sa\&iacute;a uma foto que me agradasse.
      </p><p>
      Certo dia, cansada das fotos de fam\&iacute;lia terr\&iacute;veis, minha m\&atilde;e pediu que eu pesquisasse uma c\&acirc;mera que tirasse "boas fotos". Restando alguns meses para concluir a faculdade e com senso cr\&iacute;tico bem mais maduro, eu me debrucei sobre a internet em busca de tal c\&acirc;mera e me perdi no mundo fotogr\&aacute;fico. De l\&aacute; para c\&aacute;, foram in\&uacute;meras pesquisas sobre o funcionamento de uma c\&acirc;mera e muitos v\&iacute;deos do youtube assistidos, para que eu finalmente pudesse olhar para as minhas fotos e ficar fascinado como eu ficava quando crian\&ccedil;a.
      </p>
      <p class="section">
      Mas nem todas as minhas aptid\&otilde;es foram premeditadas. Quando perdi meu bisav\&ocirc; na adolesc\&ecirc;ncia, eu tive o impulso de externar minha tristeza em um pequeno texto. Era uma forma de homenage\&aacute;-lo com palavras bonitas e ao mesmo tempo materializar aquela dor fora do meu corpo. E foi bom. Escrever aquele texto me trouxe uma anestesia. Ainda que r\&aacute;pida, eu logo percebi que poderia renovar a sensa\&ccedil;\&atilde;o de anestesia ao reler o texto.
      </p><p>
      Alguns anos se passaram e quando eu tive a minha primeira desilus\&atilde;o amorosa, imediatamente comecei a escrever. Inicialmente eu escrevia s\&oacute; para mim, num bloco de notas. Mas certo dia, ao ler alguns dos meus textos, um amigo insistiu para que eu criasse um blog. Foi assim que surgiu o "Sem D\&uacute;vidas, Sem Certezas", um blog com textos rom\&acirc;nticos e reflex\&otilde;es sobre a vida. Atualmente inativo, o blog rendeu mais de 100 textos e alguns leitores fi\&eacute;is. Seu fechamento em 2017 foi um passo importante na minha vida pessoal, mas nunca deixei de ter carinho pelos textos que escrevi.
      </p>
      <p class="section">
      Saudoso por um blog desativado e com fotos acumuladas no instagram que n\&atilde;o podem ser adequadamente apreciadas, tomei a decis\&atilde;o de criar um site pessoal. O objetivo principal \&eacute; reunir minhas produ\&ccedil;\&otilde;es art\&iacute;sticas e manter registro para a posterioridade. Mas anseio pelas conex\&otilde;es que o site pode me trazer, al\&eacute;m do engajamento e feedback de pessoas apaixonadas pelos mesmos hobbies que eu.
      Sem mais, sejam bem-vindos! Espero que a visita seja prazerosa.
      </p>
    `;
  }
  else
  {
    return `
    <p class="section">
      It's amazing how some of the things that define us, are formed very early in our lives. Since I was little, I've always shown interest in music, photography and technologies. But the development of these interests happened very differently.
      </p>
      <p class="section">
      I used to start drumming anywhere I could when I listened to a song I liked. So very naturally, I started to study music. I learnt music theory and learnt how to play the keyboards and the saxophone. A couple of years later I was playing in several wedding ceremonies and regularly playing at the church.
      </p>
      <p class="section">
      Although I have always been curious about tech equipment, my interest in technology really begun when I got my first computer, at age of 12. I loved to learn prompt commands and my goal was almost always to make Windows run faster and appear prettier. Years passed and this closeness with computers led me to a Computer Engineering degree, glueing me to technology forever.
      </p>
      <p class="section">
      It was only when I finished college that I managed to get closer to photography (at the end of 2014). Until then I was fascinated by beautiful pictures of landscapes, sunsets and the moon, but I was completely incapable of taking any good pictures with my family's camera. But one day I decided to research and find what one needed to take a "perfect" photo. Since then I started an endless path in search of knowledge, practice and equipment to improve my results more and more.
      </p>
      <p class="section">
      Now, six years have gone by. I've taken many bad pictures that thought me much. Today I'm proud of a lot of pictures. Enough to want to share with those who also appreciate photography.
      </p>
      <p class="section">
      But during all this time, while learning all these interests I had, a new one came along unnoticed. I discovered writing. I started writing to get rid of the feelings of love delusions and I ended up with a blog with over 100 posts.
      </p>
      <p class="section">
      Today I collect some texts and photos of which I am honestly proud of. So I decided to create this website as a portfolio to share with friends and lovers of photography, music and literature, a bit of what I have produced along this years, in only one place. This website is where my skills and passions meet because not only all the art and content were created by me but also the website itself was projected and designed by me.
      </p>
      <p class="section">
      Without any further ado, welcome! I hope the visit is pleasant and that makes you come back somehow.
      </p>
    `;
  }
}