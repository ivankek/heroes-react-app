import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe("Pruebas en el AppRouter", () => {
  test("Debe mostrar el login si no está autenticado", () => {
    const contexValue = {
      user: {
        logged: false,
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contexValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("LoginScreen");
  });
  test("Debe mostrar el el componente de Marvel si está autenticado", () => {
    const contexValue = {
      user: {
        logged: true,
        name: "Pepe",
      },
    };
    
    const wrapper = mount(
      <AuthContext.Provider value={contexValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
