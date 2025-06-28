import { Card } from './Card.jsx';

export function Panel() {
  return (
    <section class="panel glass">
      <h2 class="panel-title">Zainstalowane aplikacje</h2>
      <div class="panel-content">
        <Card name="Photoshop" status="Updated" action="Open" />
        <Card name="Illustrator" status="Update Available" action="Update" />
        <Card name="After Effects" status="Not Installed" action="Install" />
      </div>
    </section>
  );
}
