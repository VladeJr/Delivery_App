import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const categories = [
  { name: 'Pães', icon: 'bread-slice-outline' },
  { name: 'Bolos', icon: 'cake-variant-outline' },
  { name: 'Bebidas quentes', icon: 'coffee-outline' },
  { name: 'Bebidas', icon: 'bottle-tonic-outline' },
  { name: 'Pizza', icon: 'pizza' },
  { name: 'Sorvetes', icon: 'ice-cream' },
  { name: 'Doces', icon: 'candy-outline' },
  { name: 'Lanches', icon: 'food' },
  { name: 'Frios', icon: 'fridge-outline' },
  { name: 'More', icon: 'dots-horizontal' },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Entregar para</Text>
          <TouchableOpacity style={styles.locationRow}>
            <Text style={styles.location}>Selecione sua Localização</Text>
            <Ionicons name="chevron-down" size={18} color="#ff5c45" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Banner placeholder */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Aproveite as promoções 🔥</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#aaa" />
        <TextInput
          style={styles.searchInput}
          placeholder="Procurar"
        />
        <TouchableOpacity>
          <Ionicons name="options-outline" size={20} color="#aaa" />
        </TouchableOpacity>
      </View>

      {/* Categorias */}
      <View style={styles.categoriesContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <MaterialCommunityIcons name={item.icon as any} size={24} color="#ff5c45" />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Ofertas Especiais (Placeholder) */}
      <View style={styles.offersHeader}>
        <Text style={styles.sectionTitle}>Ofertas Especiais</Text>
        <TouchableOpacity>
          <Text style={styles.verMais}>Ver mais</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.offerList}>
        {/* Simulando cards de produtos */}
        <View style={styles.offerCard}>
          <Image
            style={styles.offerImage}
            source={{ uri: 'https://via.placeholder.com/100x100.png?text=Produto+1' }}
          />
          <Text style={styles.offerTitle}>X-Salada</Text>
        </View>
        <View style={styles.offerCard}>
          <Image
            style={styles.offerImage}
            source={{ uri: 'https://via.placeholder.com/100x100.png?text=Produto+2' }}
          />
          <Text style={styles.offerTitle}>Pão Caseiro</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 14,
    color: '#999',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff5c45',
    marginRight: 4,
  },
  banner: {
    backgroundColor: '#ffe9d6',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  bannerText: {
    fontSize: 16,
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    width: '30%',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  offersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  verMais: {
    color: '#ff5c45',
    fontWeight: '500',
    fontSize: 14,
  },
  offerList: {
    flexDirection: 'row',
    gap: 16,
  },
  offerCard: {
    width: 120,
    alignItems: 'center',
  },
  offerImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
  },
  offerTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
});
