import avatar from '../assets/img/avatar.png';
import '../assets/styles/profile.css';


export default function Profile() {
  return (
    <div class="persona-root">
      <div class="persona-left">
        <div class="avatar-illu" aria-hidden="true">
          <img class="avatar" src={avatar} alt="Avatar" />
        </div>
        <div class="persona-name">low_kb</div>

        <div class="persona-metric">
          <span>Age:</span> 18
        </div>
        <div class="persona-metric">
          <span>Role:</span> Fullstack Developer
        </div>
        <div class="persona-metric">
          <span>Main Languages:</span><br />
          JavaScript, TypeScript, Java, C#
        </div>
        <div class="persona-metric">
          <span>Backend Stack:</span><br />
          Fastify, Express.js, NestJS,<br />
          WebSocket, Socket.io,<br />
          Mongoose (MongoDB), Sequelize (SQL),<br />
          PostgreSQL, Prisma, Docker, Docker Swarm
        </div>
        <div class="persona-metric">
          <span>Frontend Stack:</span><br />
          Preact, React, Vite, HTML, EJS
        </div>
        <div class="persona-metric">
          <span>Other Tech:</span><br />
          oceanic.js, discord.js, CORS, AES, RSA, E2EE encryption
        </div>
        <div class="persona-metric">
          <span>Programming Principles:</span> DRY, SOLID, OOP
        </div>
      </div>

      <div class="persona-right">
        <div class="persona-quote">
          “Minimal unnecessary operations, easy maintenance and expansion, code optimized for performance and clarity.”
        </div>

        <div class="persona-section">
          <div class="persona-section-title">Biography</div>
          <div class="persona-section-text">
            I am a highly motivated Fullstack Developer with expertise ranging from backend systems to frontend interfaces and even custom programming languages. My work emphasizes speed, scalability, and maintainable architecture. I combine experience from web applications, game development, and cybersecurity.
          </div>
        </div>

        <div class="persona-section">
          <div class="persona-section-title">Key Projects</div>
          <ul>
            <li>Node.js + Preact app with WebRTC (video room + chat)</li>
            <li>Custom programming language "lowScript" (.kb) in C++ with parser, bytecode compiler, and VM</li>
            <li>Discord bot dashboard (OAuth2, REST API)</li>
            <li>Portfolio in game UI style (stats, classes)</li>
            <li>Web FPS game inspired by Roblox Arsenal</li>
          </ul>
        </div>

        <div class="persona-section">
          <div class="persona-section-title">Skills</div>
          <ul>
            <li>Writing clean, modular, and scalable code</li>
            <li>Performance optimization (time and memory complexity)</li>
            <li>Unit testing and test maintenance</li>
            <li>Debugging and error handling</li>
            <li>Project architecture for growth</li>
          </ul>
        </div>

        <div class="persona-section">
          <div class="persona-section-title">Principles in Work</div>
          <ul>
            <li>Minimal unnecessary operations</li>
            <li>Easy maintenance and expansion</li>
            <li>Code optimized for performance and clarity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
