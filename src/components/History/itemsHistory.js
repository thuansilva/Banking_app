import React from "react";
import {
  ContainerItems,
  ContainerImage,
  ContainerService,
  NameService,
  DataService,
  Price,
  Simbol,
} from "./styles";

const ItensHistory = () => (
  <>
    <ContainerItems>
      <ContainerImage
        source={{
          uri:
            "https://yt3.ggpht.com/ytc/AAUvwni_LdnpDi-SOIhjp4Kxo2l_yVBoYsfdDCpUM5VDzg=s900-c-k-c0x00ffffff-no-rj",
        }}
      />
      <ContainerService>
        <NameService>Netflix</NameService>
        <DataService>12/02/2020</DataService>
      </ContainerService>
      <Price>
        <Simbol>-R$</Simbol>
        12,00
      </Price>
    </ContainerItems>
    <ContainerItems>
      <ContainerImage
        source={{
          uri: "https://cdn.shopify.com/assets/images/logos/shopify-bag.png",
        }}
      />
      <ContainerService>
        <NameService>Shopfy</NameService>
        <DataService>12/02/2020</DataService>
      </ContainerService>
      <Price>
        <Simbol>-R$</Simbol>
        10,00
      </Price>
    </ContainerItems>

    <ContainerItems>
      <ContainerImage
        source={{
          uri:
            "https://s2.glbimg.com/c2ngCP6JyR_QlRZOGgYj5M0nyTk=/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2019/r/c/0iCyfKR6251lU39gbQkQ/99taxis.png",
        }}
      />
      <ContainerService>
        <NameService>99 Taxis</NameService>
        <DataService>12/02/2020</DataService>
      </ContainerService>
      <Price>
        <Simbol>-R$</Simbol>
        32,00
      </Price>
    </ContainerItems>
  </>
);

export default ItensHistory;
