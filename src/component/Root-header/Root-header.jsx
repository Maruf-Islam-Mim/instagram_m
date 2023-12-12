import { Helmet } from "react-helmet";

const Root_header = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link
          rel="shortcut icon"
          href="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"
          type="image/x-icon"
        />
      </Helmet>
    </>
  );
};

export default Root_header;
