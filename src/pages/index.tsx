import Head from "next/head";
import styles from '@/styles/home.module.css'; 
import Image from "next/image";
import HeroImage from '../../public/assets/hero.png'
import { GetStaticProps } from "next";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebaseconnection";

interface HomeProps{
  posts: number;
  comments: number
}


export default function Home({ posts, comments }: HomeProps) {
  return (
   <div className={styles.container}>
      <Head>
        <title>Tarefas + </title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt="Logo Tarefas+"
            src={HeroImage}
            priority/>
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar <br/>
          seus estudos e tarefas
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+{posts} posts</span>
          </section>
          <section className={styles.box}>
            <span>+{comments} comentários</span>
          </section>
        </div>
      </main>
    
      </div>
  );
}


export const getStaticProps: GetStaticProps = async () => {
 //buscr do banco os numeros e mandar para o componente

 const commentRef = collection(db, "comments")

 const commentSnapshot = await getDocs(commentRef)

 const postRef = collection(db,"tarefas")

 const postSnapshot = await getDocs(postRef)
  return {
    props:{
      posts: postSnapshot.size || 0,
      comments: commentSnapshot.size || 0,
    },
    revalidate: 60, // revalidada a cada 60s. A cada 60s ira buscar no nosso banco de dados os valores e atualizar as variaveis  com eles
  }
}