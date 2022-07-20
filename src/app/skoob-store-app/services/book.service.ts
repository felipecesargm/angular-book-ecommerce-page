import { Injectable } from '@angular/core';
import { Books } from '../books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  retieveAll(): Books[] {
    return livros

  }
}

var livros: Books [] = [
  {
    bookName: 'Essencialismo: A disciplinada busca por menos',
    autorName: 'Greg Mckeown',
    imgURL: './assets/imgs/Essencialismo-Greg-Mckeown.jpg', 
    description: 'O ESSENCIALISTA NÃO FAZ MAIS COISAS EM MENOS TEMPO – ELE FAZ APENAS AS COISAS CERTAS.Se você se sente sobrecarregado e ao mesmo tempo subutilizado, ocupado, mas pouco produtivo, e se o seu tempo parece servir apenas aos interesses dos outros, você precisa conhecer o essencialismo.',     
    publisher: 'Editora Sextante', 
    price: 37.40,
    rating: 5,
  },
  {
    bookName: 'O homem mais rico da Babilônia',
    autorName: 'George S Clason',
    imgURL: './assets/imgs/Homem-mais-rico-babilonia-George.jpg', 
    description: 'Com mais de dois milhões de exemplares vendidos no mundo todo, O homem mais rico da Babilônia é um clássico sobre como multiplicar riqueza e solucionar problemas financeiros. Baseando-se nos segredos de sucesso dos antigos babilônicos ― os habitantes da cidade mais rica e próspera de seu tempo.',     
    publisher: 'HarperCollins', 
    price: 16.89,
    rating: 5,
  },
  {
    bookName: 'O investidor inteligente',
    autorName: 'Benjamin Graham',
    imgURL: './assets/imgs/Investido-Inteligente-Benjamin-G.jpg', 
    description: 'Atualizado com novos comentários de Jason Zweig. Prefácio e apêndice de Warren E. Buffett."De longe, o melhor livro sobre investimentos já escrito."',     
    publisher: 'HarperCollins Brasil', 
    price: 89.90,
    rating: 5,
  },
  {
    bookName: 'Meditações',
    autorName: ' Marco Aurélio',
    imgURL: './assets/imgs/Meditações-Marco-Aurelio.jpg', 
    description: 'Estas são anotações pessoais do imperador romano Marco Aurélio escritas entre os anos de 170 a 180.Também conhecidas como Meditações a mim mesmo, reúnem aforismos que orientaram o governante pela perspectiva do estoicismo – o controle das emoções para que se evitem os erros de julgamento.Suas meditações formam um manual de comportamento ainda atual sobre como podemos melhorar nosso comportamento e o relacionamento com o próximo.',     
    publisher: 'Edipro', 
    price: 25.20,
    rating: 5,
  },
  {
    bookName: 'Mindset: A nova psicologia do sucesso',
    autorName: 'Carol S. Dweck',
    imgURL: './assets/imgs/Mindset-A-nova-psicologia-do-sucesso-Carol-Dweck.jpg', 
    description: 'Carol S. Dweck, ph.D., professora de psicologia na Universidade Stanford e especialista internacional em sucesso e motivação, desenvolveu, ao longo de décadas de pesquisa, um conceito fundamental: a atitude mental com que encaramos a vida, que ela chama de “mindset”, é crucial para o sucesso. Dweck revela de forma brilhante como o sucesso pode ser alcançado pela maneira como lidamos com nossos objetivos.',     
    publisher: 'Objetiva', 
    price: 29.99,
    rating: 4.5,
  },
  {
    bookName: 'Pai Rico, Pai Pobre',
    autorName: 'Robert T. Kiyosaki ',
    imgURL: './assets/imgs/Pai-Rico-Pai-Pobre-Robert-T-Kiyosaki.jpg', 
    description: 'A escola prepara as crianças para o mundo real?  Essa é a primeira pergunta com a qual o leitor se depara neste livro.  O recado é ousado e direto: boa formação e notas altas não bastam para assegurar o sucesso de alguém. Eles vão para a escola, mas continuam financeiramente improficientes, despreparados para enfrentar um mundo que valoriza mais as despesas do que a poupança.',     
    publisher: 'Alta Books', 
    price: 35.90,
    rating: 5,
  },
  {
    bookName: 'O poder do hábito',
    autorName: 'Charles Duhigg',
    imgURL: './assets/imgs/Poder-do-habito-charles.jpg', 
    description: 'Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental.',     
    publisher: 'Objetiva', 
    price: 48.55,
    rating: 5,
  },
  {
    bookName: 'O Príncipe: Texto Integral',
    autorName: 'Nicolau Maquiavel',
    imgURL: './assets/imgs/Principe-Nicolau-Maquiavel.jpg', 
    description: 'Nesta obra, que é um clássico sobre pensamento político, o grande escritor Maquiavel mostra como funciona a ciência política. Discorre sobre os diferentes tipos de Estado e ensina como um príncipe pode conquistar e manter o domínio sobre um Estado.',     
    publisher: 'Edipro', 
    price: 13.96,
    rating: 4,
  },
  {
    bookName: 'Princípios',
    autorName: 'Ray Dalio',
    imgURL: './assets/imgs/Principios-Ray-Dalio.jpg', 
    description: 'Para Ray Dalio, vida, gestão, economia e investimentos podem ser sistematizados em regras. Entre as centenas de lições do livro, erguidas em torno de seus alicerces de “verdade radical” e “transparência radical”, Dalio oferece uma abordagem clara e direta para a tomada de decisões e ensinamentos valiosos para a formação de equipes sólidas e eficientes.',     
    publisher: 'Intrínseca', 
    price: 78.10,
    rating: 5,
  },
  {
    bookName: 'Sapiens - Uma Breve História da Humanidade',
    autorName: 'Yuval Noah Harari',
    imgURL: './assets/imgs/Sapiens-Uma-BreveHistoria-da-Humanidade-Yuval-Noah-Harari.jpg', 
    description: 'O que possibilitou ao Homo sapiens subjugar as demais espécies? O que nos torna capazes das mais belas obras de arte, dos avanços científicos mais impensáveis e das mais horripilantes guerras? Nossa capacidade imaginativa. Somos a única espécie que acredita em coisas que não existem na natureza, como Estados, dinheiro e direitos humanos.', 
    publisher: 'L&PM', 
    price: 64.80,
    rating: 5,
  },
  {
    bookName: 'Sobre a brevidade da vida / Sobre a firmeza do sábio',
    autorName: 'Sêneca',
    imgURL: './assets/imgs/Sobre-brevidade-da-vida-Seneca.jpg', 
    description: 'Sobre a brevidade da vida e Sobre a firmeza do sábio foram concebidos em forma de cartas e apresentam reflexões essenciais quanto à arte de viver, à passagem do tempo e à importância da razão e da moralidade.', 
    publisher: 'Objetiva', 
    price: 17.90,
    rating: 4.5,
  },
  {
    bookName: 'Rápido e devagar: Duas formas de pensar',
    autorName: 'Daniel Kahneman',
    imgURL: './assets/imgs/Rapido-e-Devagar-Daniel-Kahneman.jpg', 
    description: 'Em Rápido e devagar: duas formas de pensar, Daniel Kahneman nos leva a uma viagem pela mente humana e explica as duas formas de pensar: uma é rápida, intuitiva e emocional; a outra, mais lenta, deliberativa e lógica. ', 
    publisher: 'Penguin-Companhia', 
    price: 55.00,
    rating: 4.5,
  }
] 
