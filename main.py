import pygame
from pygame.locals import *
from OpenGL.GL import *
from OpenGL.GLUT import *
from OpenGL.GLU import *

# Define vertices of a triangle
vertices = ((0, 1, 0), (-1, -1, 0), (1, -1, 0))  # Top  # Bottom left  # Bottom right

# Define colors for each vertex
colors = ((1, 0, 0), (0, 1, 0), (0, 0, 1))  # Red  # Green  # Blue


def draw_triangle():
    glBegin(GL_TRIANGLES)
    for i in range(len(vertices)):
        glColor3fv(colors[i])
        glVertex3fv(vertices[i])
    glEnd()


def main():
    pygame.init()
    display = (800, 600)
    pygame.display.set_mode(display, DOUBLEBUF | OPENGL)

    gluPerspective(45, (display[0] / display[1]), 0.1, 50.0)
    glTranslatef(0.0, 0.0, -5)

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

        glRotatef(1, 3, 1, 1)  # Rotate the triangle
        glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)
        draw_triangle()
        pygame.display.flip()
        pygame.time.wait(10)


if __name__ == "__main__":
    main()
