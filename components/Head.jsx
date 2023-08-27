import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Iam a mobile and web developer based in Yola, Nigeria. I have rich experience in building web and cross-platform mobile applications you'd love to use"
      />
      <meta
        name="keywords"
        content="abdull, abdulrasheed ibrahim, abdoul, web developer, northern nigeria, software developer in Yola"
      />
      <meta property="og:title" content="Abdulrasheed's Portfolio" />
      <meta
        property="og:description"
        content="Web / Mobile Application Developer"
      />
      <meta property="og:url" content="https://www.abdull.dev" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:image:url" content="https://abdull.dev/me.jpg" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Abdulrasheed Ibrahim | Web / Mobile App Developer"
      />
      <meta
        name="twitter:description"
        content="JavaScript, Python, ReactJS, React Native and Django"
      />
      <meta name="twitter:image" content="https://abdull.dev/me.jpg" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Abdulrasheed Ibrahim",
};
