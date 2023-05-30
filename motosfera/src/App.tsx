import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './img/Logo.png';
import mecanicaLigera from './img/mecanica-ligera.png';
import aceiteMoto from './img/aceite-moto.png';
import cadenaMoto from './img/cadena-moto.png';
import frenosMoto from './img/frenos-moto.png';
import lucesMoto from './img/luces-moto.png';
import bujiaMoto from './img/bujia-moto.png';
import mecanico from './img/mecanico.jpg';
import formasDePago from './img/formasdepago.png';
import './prueba.css';
import taller2 from './img/taller2.jpg';
import taller4 from './img/taller4.png';
import taller5 from './img/taller5.png';
import taller6 from './img/taller6.jpg';
import taller7 from './img/taller7.png';
import taller8 from './img/taller8.jpeg';
import serviceFullImg from './img/service-full.jpg';
import serviceBaseImg from './img/service-base.jpg';
import reparacionMotoresImg from './img/carter.jpg';
import instalacionElectricaImg from './img/eletricidad-motos.jpg';
import motociclista1Img from './img/motociclista1.jpg';
import motociclista2Img from './img/motociclista2.jpg';
import motociclista3Img from './img/motociclista3.jpg';
import motociclista4Img from './img/motociclista4.jpg';
import motociclista5Img from './img/motociclista5.jpg';
import motociclista6Img from './img/motociclista6.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';


function Nosotros() {
  return <>

    <article className="contenedor">
      <h2 className="t-h2">Quienes somos?</h2>
      <section className="fh"></section>
    </article>

    <section className="nosotros-i">
      <p>
        En Taller Mecánico Motosfera contamos con mucha experiencia en la reparación integral de motos importadas, nacionales y de alta gama.
        En nuestro taller modelo podrá encontrar tecnología de última generación y un trato personalizado que le permitirá resolver sus inquietudes y reparar su vehículo.
      </p>
      <article>
        <h2>Seriedad</h2>
        <p className="fondoTexto1-icon">
          En Motosfera nos aseguramos de brindar el mejor servicio, de calidad y brindando un diagnóstico claro. En este taller podés dejar tu moto tranquilo/a porque ofrecemos un servicio de calidad.
        </p>
      </article>
      <article>
        <h2>Rapidez</h2>
        <p className="fondoTexto2-icon">
          Para nosotros el tiempo es muy valioso por eso cuidamos el tuyo, realizamos trabajos en el día para que vuelvas a tener tu moto en la calle en un tiempo máximo de 24 hs.
        </p>
      </article>
      <article>
        <h2>El mejor precio</h2>
        <p className="fondoTexto3-icon">
          Motosfera también cuida tu bolsillo, porque el motero trabajador no puede pagar locuras para tener su vehículo en óptimas condiciones y a un precio razonable.
        </p>
      </article>
    </section>

    <article>
      <h2 className="t-h2">Galeria de fotos</h2>
      <div className="galeria">
        <section>
          <img src={taller2} alt="taller2" />
        </section>
        <section>
          <img src={taller4} alt="taller4" />
        </section>
      </div>
      <div className="galeria">
        <section>
          <img src={taller5} alt="taller5" />
        </section>
        <section>
          <img src={taller6} alt="taller6" />
        </section>
        <section>
          <img src={taller7} alt="taller7" />
        </section>
        <section>
          <img src={taller8} alt="taller8" />
        </section>
      </div>
    </article>
  </>
}

function Servicios() {
  return <>

    <h2 className="t-h2">Te ofrecemos los siguientes servicios</h2>

    <section className="service">
      {/* Servicio Full */}
      <section>
        <h2>Service Full</h2>
        <article>
          <p>
            Si usas tu moto con frecuencia y la cuidas como se merece, te recomendamos el Service Full que te ofrecemos. Revisaremos a fondo cada detalle para que tu moto funcione correctamente sin dejar pasar ningún detalle.
          </p>
        </article>
        <div className="service-info">
          <img src={serviceFullImg} alt="service-full" />
          <div className="service-info-l">
            <article>
              <p>Este servicio incluye:</p>
              <ul>
                <li>Cambio de aceite.</li>
                <li>Regulación de embrague.</li>
                <li>Control y regulación de frenos.</li>
                <li>Control de luces.</li>
                <li>Cambio de lámparas.</li>
                <li>Calibración de carburador.</li>
                <li>Servicio en transmisión.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Servicio Base */}
      <section>
        <h2>Service Base</h2>
        <article>
          <p>
            Cuidar tu moto es cuidar tu propia seguridad, por eso es recomendable que siempre la tengas en perfecto estado. Te ofrecemos el Service Base en el cual revisaremos el estado de los frenos, aceite, neumáticos y demás para el buen funcionamiento de tu moto.
          </p>
        </article>
        <div className="service-info">
          <img src={serviceBaseImg} alt="service-base" />
          <div className="service-info-l">
            <article>
              <p>Este servicio incluye:</p>
              <ul>
                <li>Cambio de aceite.</li>
                <li>Regulación de embrague.</li>
                <li>Control y regulación de frenos</li>
                <li>Servicio en transmisión.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </section>

    <section className="service">
      {/* Reparación de motores */}
      <section>
        <h2>Reparacion de motores</h2>
        <h3>Motosfera</h3>
        <div className="service-info">
          <img src={reparacionMotoresImg} alt="reparacion-de-motores" />
          <div className="service-info-l">
            <article>
              <p>Este servicio incluye:</p>
              <ul>
                <li>Rectificado de cilindro</li>
                <li>Colocacion de nuevo piston</li>
                <li>Reparacion de tapa del clindro</li>
                <p>
                  <span>Contamos con los repuestos necesarios<br />para este y todos los trabajos.</span>
                </p>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Instalación eléctrica */}
      <section>
        <h2>Instalacion electrica</h2>
        <h3>Motosfera</h3>
        <div className="service-info">
          <img src={instalacionElectricaImg} alt="instalacion-electrica" />
          <div className="service-info-l">
            <article>
              <p>Este servicio incluye:</p>
              <ul>
                <li>Recableado.</li>
                <li>Reparación de circuitos eléctricos.</li>
                <li>Análisis de fallas y cortos circuitos.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </section>
  </>
}

function Testimonios() {
  return <>
    <h2 className="container t-h2">Opiniones</h2>
    <div className="div-opiniones">
      {/* Artículo de opinión 1 */}
      <article>
        <h3>Elkin Gamboa</h3>
        <div className="div-texto">
          <p>
            Muy bien, como siempre. No cobra caro en la relación precio-calidad y el servicio es rápido en comparacion de otros talleres aca te arreglan la moto en el dia a no ser que sea un trabajo muy complejo, impecable.
          </p>
        </div>
        {/* Calificación en forma de estrellas */}
        <section className="calificacion">
          <h4>★ ★ ★ ★ ★</h4>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </section>
        {/* Imagen relacionada con la opinión */}
        <img src={motociclista1Img} width="230" height="200" alt="motociclista1" />
      </article>
      {/* Artículo de opinión 2 */}
      <article>
        <h3>Carlos Garcia</h3>
        <div className="div-texto">
          <p>
            Es dificil encontrar un taller de motos de gente honesta y en Motosfera los trabajos se hacen pensando en el cliente. Amabilidad y atención rápida. Mi moto quedó perfecta. Precios accesibles.
          </p>
        </div>
        {/* Calificación en forma de estrellas */}
        <section className="calificacion">
          <h4>★ ★ ★ ★ ★</h4>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </section>
        {/* Imagen relacionada con la opinión */}
        <img src={motociclista2Img} width="230px" height="200px" alt="motociclista2" />
      </article>
      {/* Artículo de opinión 3 */}
      <article>
        <h3>Pamela Lopez</h3>
        <div className="div-texto">
          <p>
            Trabajan con mucha seriedad, entregan en tiempo y son muy accesibles. Tambien hay que destacar que se puede pagar con tarjeta de credito en cuotas y eso es una ventaja muy grande.
          </p>
        </div>
        {/* Calificación en forma de estrellas */}
        <section className="calificacion">
          <h4>★ ★ ★ ★ ★</h4>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </section>
        {/* Imagen relacionada con la opinión */}
        <img src={motociclista3Img} width="230px" height="200px" alt="motociclista3" />
      </article>
    </div>
    <div className="div-opiniones">
      {/* Artículo de opinión 4 */}
      <article>
        <h3>Guillermo Vina</h3>
        <div className="div-texto">
          <p>
            Excelente atención y servicio. Trabajos de calidad. Buen precio. Deje mi moto de alta gama en las manos de Hernan y el resultado fue el esperado. Muy conforme con el servicio brindado.
          </p>
        </div>
        {/* Calificación en forma de estrellas */}
        <section className="calificacion">
          <h4>★ ★ ★ ★ ★</h4>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </section>
        {/* Imagen relacionada con la opinión */}
        <img src={motociclista4Img} width="230px" height="200px" alt="motociclista4" />
      </article>
      {/* Artículo de opinión 5 */}
      <article>
        <h3>Ana Valenzuela</h3>
        <div className="div-texto">
          <p>
            La atencion de Hernan es muy buena, muy diferente a otros talleres donde no te tocan la moto y te cobran carisimo, en Motosfera no solo te solucionan todos las averias de tu moto con toda seriedad y a un precio totalmente accesible.
          </p>
        </div>
        {/* Calificación en forma de estrellas */}
        <section className="calificacion">
          <h4>★ ★ ★ ★ ★</h4>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </section>
        {/* Imagen relacionada con la opinión */}
        <img src={motociclista5Img} width="230px" height="200px" alt="motociclista5" />
      </article>
      {/* Artículo de opinión 6 */}
      <article>
        <h3>Mario Perez</h3>
        <div className="div-texto">
          <p>
            Llegue de otro taller con la moto destrozada, en Motosfera me hicieron el motor nuevo en tiempo récord y a un precio increíble, aparte de contar con sus propios repuestos te desliga de andar buscando los mismos. Totalmente recomendado.
          </p>
        </div>
        {/* Calificación en forma de estrellas */}
        <section className="calificacion">
          <h4>★ ★ ★ ★ ★</h4>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </section>
        {/* Imagen relacionada con la opinión */}
        <img src={motociclista6Img} width="230px" height="200px" alt="motociclista6" />
      </article>
    </div>
  </>
}

function Contacto() {
  return <>
    <h2 className="t-h2">Deja tu consulta:</h2>
    <article>
      <div className="banner-form">
        <section className="contacto">
          <form id="consultaForm">
            <h3>Contacto:</h3>
            <input type="text" name="nombre" placeholder="Tu nombre" />
            <input type="email" name="email" placeholder="Tu email" />
            <textarea name="mensaje" placeholder="Dejanos un mensaje"></textarea>
            <input type="submit" value="Enviar" />
          </form>
        </section>
      </div>
    </article>

    <div id="myModal" className="modal">
      <div className="modal-content">
        <h4 id="successMessage">Los datos se han guardado con éxito.</h4>
      </div>
    </div>

    <h2 className="t-h2">Informacion Util</h2>
    <div className="informa-u">
      <section>
        <i className="fab fa-whatsapp"></i>
        <h4>Whatsapp</h4>
        <p>3124484500</p>
      </section>
      <section>
        <i className="fas fa-phone-alt"></i>
        <h4>Teléfono</h4>
        <p>3124484500</p>
      </section>
      <section>
        <i className="fas fa-map-marker-alt"></i>
        <h4>Dirección</h4>
        <p>Kennedy, Bogotá, Colombia</p>
      </section>
      <section>
        <i className="far fa-clock"></i>
        <h4>Horario</h4>
        <p>Lun a Vie de 8.00 a 13.0 hs. y de 14 a 18hs<br />Sab. de 9 a 13 hs.</p>
      </section>
    </div>

    <article>
      <h2 className="t-h2">Cómo Llegar?</h2>
    </article>
    <section className="como-llegar">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31814.389445096098!2d-74.17258144369883!3d4.629975827838635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c20c1186379%3A0x72c48cbe21e275ac!2sKennedy%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1683683367226!5m2!1ses-419!2sco" width="600" height="450" style={{ border: '0' }} loading="lazy"></iframe>
      <article>
        <p>Estamos en Kennedy, Bogotá Capital, Colombia.</p>
      </article>
    </section>
  </>
}

function Login() {

  return (
    <main>
      <div className="contenedor__todo">
        <div className="caja__trasera">
          <div className="caja__trasera-login">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>Inicia sesión para entrar en la página</p>
            <button id="btn__iniciar-sesion">Iniciar Sesión</button>
          </div>
          <div className="caja__trasera-register">
            <h3>¿Aún no tienes una cuenta?</h3>
            <p>Regístrate para que puedas iniciar sesión</p>
            <button id="btn__registrarse">Regístrarse</button>
          </div>
        </div>

        <div className="contenedor__login-register">
          <form action="" className="formulario__login">
            <h2>Iniciar Sesión</h2>
            <input type="text" id="login-email" placeholder="Correo Electrónico" />
            <input type="password" id="login-password" placeholder="Contraseña" />
            <button type="submit">Entrar</button>
          </form>

          <form action="" className="formulario__register">
            <h2>Regístrarse</h2>
            <input type="text" id="register-name" placeholder="Nombre completo" />
            <input type="text" id="register-email" placeholder="Correo Electrónico" />
            <input type="text" id="register-username" placeholder="Usuario" />
            <input type="password" id="register-password" placeholder="Contraseña" />
            <button type="submit">Regístrarse</button>
          </form>
        </div>
      </div>

    </main>
  );
}

function App() {
  return (
    <Router>
      <>
        <header className="header-sitio">
          <div className="container header-container">
            <nav id="nav">
              <img src={logo} alt="Mi imagen" className="logo" />
              <Link to="/nosotros">Nosotros</Link>
              <Link to="/servicios">Servicios</Link>
              <Link to="/opiniones">Testimonios</Link>
              <Link to="/contacto">Contacto</Link>
              <Link to="/login">Login</Link>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/opiniones" element={<Testimonios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <div className="banner-inicio">
          <h1>Taller mecánico de motos Motosfera</h1>
          <h2>Accesorios, motomecánica, repuestos</h2>
        </div>

        <h2 className="t-h2">Taller Motosfera</h2>
        <article className="container index-content">
          <p>
            Nuestro principal objetivo es lograr que tu experiencia sea excelente desde el primer contacto hasta el día siguiente a
            retirar tu unidad. <br />
            Para llevar adelante esta modalidad de trabajo, contamos con los mejores asesores de servicios, que te brindarán
            asesoramiento y seguimiento permanente durante el taller de motos. <br />
            Contamos con un staff de Mecánicos certificados que revisarán a fondo cada detalle de tu moto para que funcione como
            corresponde sin dejar pasar ningún detalle.
          </p>
        </article>

        <h2 className="t-h2">¿Por qué elegirnos?</h2>
        <article className="container index-content"></article>

        <div className="banner-articulos">
          <section className="articulos contenedor">
            <article className="slogan">
              <h3 className="s-titulos">Seriedad</h3>
              <p>
                En Motosfera nos aseguramos de brindar el mejor servicio, de calidad y brindando un diagnóstico claro. En este taller
                puedes dejar tu moto tranquila porque ofrecemos un servicio de calidad.
              </p>
            </article>
            <article className="slogan">
              <h3 className="s-titulos">Rapidez</h3>
              <p>
                Para nosotros el tiempo es muy valioso, por eso cuidamos el tuyo. Realizamos trabajos en el día para que vuelvas a tener
                tu moto en la calle en un tiempo máximo de 24 hs.
              </p>
            </article>
            <article className="slogan">
              <h3 className="s-titulos">El mejor precio</h3>
              <p>
                Motosfera también cuida tu bolsillo, porque el motero trabajador no puede pagar locuras para tener su vehículo en
                óptimas condiciones y a un precio razonable.
              </p>
            </article>
          </section>
        </div>

        <section className="servicios-inicio">
          <section className="contenedor">
            <h2 className="t-h2">Mecánica Ligera</h2>
            <div className="fotosServicios">
              <article>
                <img src={mecanicaLigera} alt="mecanica ligera" className="ani-ph" />
                <h3>Ajustes generales</h3>
              </article>
              <article>
                <img src={aceiteMoto} alt="aceite" />
                <h3>Control de aceite</h3>
              </article>
              <article>
                <img src={cadenaMoto} alt="transmision" />
                <h3>Transmisión</h3>
              </article>
              <article>
                <img src={frenosMoto} alt="frenos" />
                <h3>Frenos</h3>
              </article>
              <article>
                <img src={lucesMoto} alt="luces" />
                <h3>Luces</h3>
              </article>
              <article>
                <img src={bujiaMoto} alt="bujia" />
                <h3>Control de bujías</h3>
              </article>
            </div>
          </section>
        </section>
        <aside>
          <section className='container1'>
            <h3>Mecánicos Certificados</h3>
            <img src={mecanico} alt="mecanico" />
            <p>Contamos con mecánicos certificados y brindamos el mejor servicio en la provincia.</p>
          </section>
          <section>
            <h3>Aceptamos tarjetas</h3>
            <img src={formasDePago} width="275px" height="183px" alt="" />
            <p>Consulta otros métodos de pago, planes y más tarjetas adheridas en nuestro local.</p>
          </section>
          <section>
            <h3>Consúltanos por Whatsapp ☎</h3>
            <section className="wsp-aside">
              <i className="fab fa-whatsapp"></i>
              <p>+57 3124484500</p>
            </section>
          </section>
        </aside>
        

        <footer className="pie">
          <div className="container footer-content">
            <ul className="footer-info">
              <li>Dirección: Bogotá, Colombia</li>
              <li>Tel: +57 3124484500</li>
            </ul>

            <ul className="footer-redes">
              <li>
                <i className="fab fa-facebook-f"></i>
              </li>
              <li>
                <i className="fab fa-instagram"></i>
              </li>
            </ul>
          </div>
          <p>QDS - 2023</p>
        </footer>


      </>
    </Router>
  );
}

export default App;
