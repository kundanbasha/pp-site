import "./manifesto-list.css";

const ManifestoList = () => {
  return (
    <div className="manifesto-wrap">
      <ManifestoItem>కుటుంబ ఆర్థిక పరిపుఠి/స్వయం ఉపాధి</ManifestoItem>
      <ManifestoItem>ఉచిత విద్య కాదు, పనికోచ్ఛే విద్య</ManifestoItem>
      <ManifestoItem>విధేయత- తోడ్పాటు – సమానత్వం</ManifestoItem>
      <ManifestoItem>రైతే రాజు</ManifestoItem>
      <ManifestoItem>మద్యం నియంత్రణ</ManifestoItem>
      <ManifestoItem>మన ఊరు - మన ప్రణాళిక</ManifestoItem>
    </div>
  );
};

export default ManifestoList;

const ManifestoItem = ({ children }) => {
  return <div className="manifesto-item">{children}</div>;
};
