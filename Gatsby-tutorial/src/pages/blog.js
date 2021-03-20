import React from "react"
import Layout from "../components/Layout"
import styles from "../components/Blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p className={styles.text}>
          Greg understood that this situation would make Michael terribly
          uncomfortable. Michael simply had no idea what was about to come and
          even though Greg could prevent it from happening, he opted to let it
          happen. It was quite ironic, really. It was something Greg had said he
          would never wish upon anyone a million times, yet here he was
          knowingly letting it happen to one of his best friends. He
          rationalized that it would ultimately make Michael a better person and
          that no matter how uncomfortable, everyone should experience racism at
          least once in their lifetime.
        </p>
      </div>
    </Layout>
  )
}

export default blog
