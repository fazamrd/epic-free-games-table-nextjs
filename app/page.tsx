import { Table, Tag } from 'antd'
import Link from 'next/link'

const dataSource = [
  {
    key: '1',
    game_name: 'Shapez',
    game_url: 'https://www.metacritic.com/game/shapez/',
    date: '2023-11-11',
    meta_score: 74,
    user_score: 80,
    critic_review: 100,
    user_review: 50
  },
  {
    key: '2',
    game_name: 'The Witness',
    game_url: 'https://www.metacritic.com/game/the-witness/',
    date: '2023-11-12',
    meta_score: 74,
    user_score: 80,
    critic_review: 100,
    user_review: 50
  },
  {
    key: '3',
    game_name: 'Subnautica',
    game_url: 'http://www.metacritic.com/game/pc/subnautica',
    date: '2023-10-11',
    meta_score: 74,
    user_score: 80,
    critic_review: 100,
    user_review: 50
  },
]

const columns = [
  {
    title: 'No.',
    dataIndex: 'key',
    key: 'No.'
  },
  {
    title: 'Game Name',
    dataIndex: 'game_name',
    key: 'game_name',
    sorter: true
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    sorter: true
  },
  {
    title: 'Meta Score',
    dataIndex: 'meta_score',
    key: 'meta_score',
  },
  {
    title: 'User Score',
    dataIndex: 'user_score',
    key: 'user_score'
  },
  {
    title: 'Critic Review',
    dataIndex: 'critic_review',
    key: 'critic_review'
  },
  {
    title: 'User Review',
    dataIndex: 'user_review',
    key: 'user_review'
  },
]

export default function Home() {
  return (
    <main>
      <div>
        <h1 style={{textAlign: "center"}}>Epic Games Free Games List</h1>
      </div>
      <div style={{width: "70%", margin: "50px auto"}}>
        <Table
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    </main>
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>app/page.tsx</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>


    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore starter templates for Next.js.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}
