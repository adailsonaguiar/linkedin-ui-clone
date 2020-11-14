import React from "react";

import * as S from "./styles";

const MobileHeader: React.FC = () => {
  return (
    <S.Container>
      <S.ProfileImage src="https://github.com/adailsonaguiar.png" />
      <S.SearchInput placeholder="Pesquisar" />
      <S.MessageIcon size={25} />
    </S.Container>
  );
};

export default MobileHeader;
