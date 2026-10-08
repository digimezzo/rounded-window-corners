import '@girs/gjs';
import '@girs/gjs/dom';
import '@girs/gnome-shell/ambient';
import '@girs/gnome-shell/extensions/global';
import '@girs/cogl-2.0';

declare module '@girs/clutter-18/clutter-18' {
    namespace Clutter {
        interface ShaderEffect {
            set_uniform_float(
                name: string,
                components: number,
                values: number[],
            ): void;
        }
    }
}
