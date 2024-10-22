import { vi } from "vitest";
import { checkGameStatus, getCardUrl, selectedCardValue } from "./motor";
import * as fnModule from "./motor";
import { game, referenceHtml, cardSource } from "./model";

vi.mock("./motor", async () => {
  const actual = await vi.importActual<typeof fnModule>("./motor");
  return {
    ...actual,
    getRandomNumber: vi.fn(),
  };
});

describe("checkGameStatus", () => {
  it("Debería cambiar el contenido de gameMessage por '!Has ganado¡' cuando la puntuación del jugador es 7.5 puntos", () => {
    // Arrange
    referenceHtml.gameMessage = { textContent: "" } as HTMLElement;
    vi.spyOn(game, "userScore", "get").mockReturnValue(7.5);

    // Act
    checkGameStatus();

    // Assert
    expect(referenceHtml.gameMessage.textContent).toBe("!Has ganado¡");
  });

  it("Debería cambiar el contenido de gameMessage por '!Has perdido¡' cuando la puntuación del jugador es mayor a 7.5 puntos", () => {
    // Arrange
    referenceHtml.gameMessage = { textContent: "" } as HTMLElement;
    vi.spyOn(game, "userScore", "get").mockReturnValue(8);

    // Act
    checkGameStatus();

    // Assert
    expect(referenceHtml.gameMessage.textContent).toBe("!Has perdido¡");
  });
});

describe("adjustNumber", () => {
  it("Debería devolver el numero 10 cuando el numero generado por getRandomNumber es 8", () => {
    // Arrange

    (fnModule.getRandomNumber as unknown as jest.Mock).mockReturnValue(8);

    // Act

    const result = fnModule.adjustNumber(fnModule.getRandomNumber());
    // Assert

    expect(result).toBe(10);
  });

  it("Debería devolver el numero 11 cuando el numero generado por getRandomNumber es 9", () => {
    // Arrange

    (fnModule.getRandomNumber as unknown as jest.Mock).mockReturnValue(9);

    // Act

    const result = fnModule.adjustNumber(fnModule.getRandomNumber());
    // Assert

    expect(result).toBe(11);
  });

  it("Debería devolver el numero 12 cuando el numero generado por getRandomNumber es 10", () => {
    // Arrange

    (fnModule.getRandomNumber as unknown as jest.Mock).mockReturnValue(10);

    // Act

    const result = fnModule.adjustNumber(fnModule.getRandomNumber());
    // Assert

    expect(result).toBe(12);
  });
});

describe("selectedCardValue", () => {
  it("Debería devolver el valor de la carta seleccionada por la funcion getCardUrl cuando el jugador pide una carta", () => {
    // Arrange

    // Act
    getCardUrl();
    // Assert
    expect(selectedCardValue()).toBe(game.selectedCard.value);
  });
});

describe("getCardUrl", () => {
  it("Debería devolver el la Url de la carta seleccionada por la funcion cuando el jugador pide una carta", () => {
    // Arrange

    // Act
    const result = getCardUrl();
    // Assert
    expect(cardSource).toContainEqual({
      url: result,
      value: expect.any(Number),
    });
    expect(game.selectedCard).toBeDefined();
  });

  it("Debería devolver 'No se encontró la carta' si getCardUrl llama a getRandomNumber y adjustNumber y el valor generado no coincide con ningún elemento del array cardSource", () => {
    // Arrange
    cardSource.length = 0;
    // Act

    // Assert
    expect(() => getCardUrl()).toThrow("No se encontró la carta");
  });
});
