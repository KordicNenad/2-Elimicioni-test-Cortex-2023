
const ProductViewContainer = (props) => {
  return (
    <>
      
      <div className="center">
        <div className="content">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default ProductViewContainer;