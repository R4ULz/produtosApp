import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import ProductCard from './components/productCard';
import BtnBuy from './components/btnBuy';

export default function App() {
  const [products, setProducts] = React.useState([
    {
      nome: 'Fone de ouvido Xing Ping Xong',
      productImg: 'https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'R$ 30,00',
      selected: false,
    },
    {
      nome: 'Mouse sem fio Chong Ju Wong',
      productImg: 'https://images.unsplash.com/photo-1631749352438-7d576312185d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdXNlJTIwd2lyZWxlc3N8ZW58MHx8MHx8fDA%3D',
      price: 'R$ 45,00',
      selected: false,

    },
    {
      nome: 'Mouse sem fio Cheng Ju Hor',
      productImg: 'https://images.unsplash.com/photo-1686730491164-56dc2145cdf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdXNlJTIwd2lyZWxlc3N8ZW58MHx8MHx8fDA%3D',
      price: 'R$ 42,59',
      selected: false,

    },
    {
      nome: 'Teclado Ping Jhong Xuong',
      productImg: 'https://plus.unsplash.com/premium_photo-1681488000659-cc08a1c6363e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjbGFkbyUyMHdpcmVsZXNzfGVufDB8fDB8fHww',
      price: 'R$ 59,90',
      selected: false,

    },
    {
      nome: 'Fone de ouvido Xeng Lao Jung',
      productImg: 'https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'R$ 30,00',
      selected: false,

    },
    {
      nome: 'Fone de ouvido Lao Ping Xong',
      productImg: 'https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'R$ 30,00',
      selected: false,

    },
    {
      nome: 'Fone de ouvido Mao Tse Tung',
      productImg: 'https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 'R$ 30,00',
      selected: false,

    },
  ]);
  
const handleSelect = (index) => {
  const newProducts = [...products];
  newProducts[index].selected = !newProducts[index].selected;
  setProducts(newProducts);
};

  function handleBuy() {
    const selectedProducts = products.filter(product => product.selected);
    if (selectedProducts.length === 0) {
      Alert.alert('Nenhum produto selecionado!');
      return;
    }
    
    const total = selectedProducts.reduce((sum, product) => {
      const price = parseFloat(product.price.replace('R$', '').replace(',', '.'));
      return sum + price;
    }, 0);

    const productNames = selectedProducts.map(p => p.nome).join('\n');

    Alert.alert('Produtos selecionados', `${productNames}\n\nTotal: R$ ${total.toFixed(2)}`);
  }

  return (
    <SafeAreaView style={styles.app}>
      <ScrollView >
        <Text style={styles.text}>Produtos Wireless</Text>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.nome}
            productImg={product.productImg}
            price={product.price}
            selected={product.selected}
            onPress={() => handleSelect(index)}
          />
        ))}
        <View style={styles.Scroll}>
          <BtnBuy onPress={handleBuy}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  text:{
    textAlign: 'center', 
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    marginTop: 50,
  },
  Scroll:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
