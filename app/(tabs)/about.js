import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { BackIcon } from "../../components/Icons";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Text className="text-white font-bold mb-4 text-4xl text-center">
          Sobre el proyecto
        </Text>
        <Text className="text-white text-white/90 mb-4 leading-5 text-base">
          Este proyecto está desarrollado con React Native y Expo, y utiliza la
          API de Metacritic para mostrar los juegos mejor puntuados. La
          aplicación cuenta con rutas dinámicas y navegación intuitiva,
          facilitando una experiencia de usuario fluida y agradable. La interfaz
          de usuario está diseñada con TailwindCSS, asegurando un diseño moderno
          y responsivo.
        </Text>
        <Text className="text-white font-bold mb-4 text-xl text-left">
          Caracteristicas
        </Text>
        <Text className="text-white text-white/90 mb-4">
          · React Native & Expo: Implementación con las últimas tecnologías para
          aplicaciones móviles.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          · API de Metacritic: Consultas a la API para obtener y mostrar los
          juegos mejor puntuados.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          · Rutas Dinámicas: Creación de rutas dinámicas para una navegación más
          flexible.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          · Navegación: Uso de la biblioteca de navegación de React Native para
          una experiencia de usuario intuitiva.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          · TailwindCSS: Estilos modernos y consistentes en toda la app.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          · Interfaz de Usuario (UI): Diseño enfocado en la experiencia del
          usuario, con una interfaz limpia y fácil de usar.
        </Text>

        <Link asChild href="/">
          <StyledPressable className={`active:opacity-50 mt-5`}>
            <BackIcon />
          </StyledPressable>
        </Link>
      </ScrollView>
    </Screen>
  );
}
