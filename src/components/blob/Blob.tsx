import { Ref, useMemo, useRef } from "react";
import FragmentShader from "./FragmentShader";
import VertexShader from "./VertexShader";
import { useFrame, } from "@react-three/fiber";
import { BufferGeometry, Material, MathUtils, Mesh, ShaderMaterial } from "three";


const Blob = () => {
    const mesh = useRef<Mesh>();
    const hover = useRef(false);
    const uniforms = useMemo(() => {
        return {
            u_time: { value: 0 },
            u_intensity: { value: 0.3 },
        };
    }, []); // Add an empty array as the second argument to specify no dependencies


    useFrame((state) => {
        const { clock } = state;
        if (mesh.current) {
            const material = mesh.current.material as ShaderMaterial;

            material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();
            material.uniforms.u_intensity.value = MathUtils.lerp(
                material.uniforms.u_intensity.value,
                hover.current ? 1 : 0.15,
                0.02
            );
        }
    });

    return (
        <mesh
            ref={mesh as Ref<Mesh<BufferGeometry, Material>>}
            scale={2}
            position={[0, 0, 0]}
            onPointerOver={() => (hover.current = true)}
            onPointerOut={() => (hover.current = false)}
        >
            <icosahedronBufferGeometry args={[2, 20]} />
            <shaderMaterial
                vertexShader={VertexShader}
                fragmentShader={FragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

export default Blob;

