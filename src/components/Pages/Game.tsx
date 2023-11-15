import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";

const screenWidth = Dimensions.get("window").width;
const tileSize = screenWidth / 20;
const boardSize = tileSize * 20;

const Game = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState("RIGHT");

  useEffect(() => {
    const interval = setInterval(updateGame, 1000);
    return () => clearInterval(interval);
  }, [snake, direction]);

  const updateGame = () => {
    moveSnake();
    checkCollision();
    checkFoodCollision();
  };

  const moveSnake = () => {
    let newSnake = [...snake];
    let head = { ...newSnake[0] };

    switch (direction) {
      case "RIGHT":
        head.x += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "UP":
        head.y -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
    }

    newSnake.unshift(head);
    newSnake.pop();
    setSnake(newSnake);
  };

  const checkCollision = () => {
    let head = snake[0];
    if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
      Alert.alert("Game Over");
      setSnake([{ x: 10, y: 10 }]);
      setDirection("RIGHT");
    }
  };

  const checkFoodCollision = () => {
    let head = snake[0];
    if (head.x === food.x && head.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20),
      });
      growSnake();
    }
  };

  const growSnake = () => {
    let newSnake = [...snake];
    newSnake.push({
      x: 0,
      y: 0,
    });
    setSnake(newSnake);
  };

  const changeDirection = (newDirection) => {
    if (newDirection !== direction) {
      setDirection(newDirection);
    }
  };

  const renderBoard = () => {
    return (
      <View style={styles.board}>
        {snake.map((s, index) => (
          <View
            key={index}
            style={{
              width: tileSize,
              height: tileSize,
              position: "absolute",
              left: s.x * tileSize,
              top: s.y * tileSize,
              backgroundColor: "green",
            }}
          />
        ))}
        <View
          style={{
            width: tileSize,
            height: tileSize,
            position: "absolute",
            left: food.x * tileSize,
            top: food.y * tileSize,
            backgroundColor: "red",
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderBoard()}
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => changeDirection("LEFT")}>
          <Text>Left</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeDirection("UP")}>
          <Text>Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeDirection("DOWN")}>
          <Text>Down</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeDirection("RIGHT")}>
          <Text>Right</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    width: boardSize,
    height: boardSize,
    backgroundColor: "lightgray",
    position: "relative",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
});

export default Game;
